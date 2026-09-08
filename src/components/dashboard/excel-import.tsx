import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { NativeSelect } from "@/components/ui/native-select";
import {
  commitImport,
  guessMapping,
  IMPORTABLE_FIELDS,
  mapRows,
  parseWorkbook,
} from "@/lib/excel";
import { useDashboard } from "@/lib/store";
import type { ColumnMapping, ImportDecision, MappedRow } from "@/lib/types";
import { toast } from "sonner";

export function ExcelImport() {
  const importOpen = useDashboard((s) => s.importOpen);
  const setImportOpen = useDashboard((s) => s.setImportOpen);
  const accounts = useDashboard((s) => s.accounts);
  const kitchens = useDashboard((s) => s.kitchens);
  const replaceAccounts = useDashboard((s) => s.replaceAccounts);

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [headers, setHeaders] = useState<string[]>([]);
  const [rawRows, setRawRows] = useState<Record<string, unknown>[]>([]);
  const [mapping, setMapping] = useState<ColumnMapping[]>([]);
  const [mapped, setMapped] = useState<MappedRow[]>([]);
  const [summary, setSummary] = useState<{
    created: number;
    updated: number;
    skipped: number;
    errors: number;
  } | null>(null);

  function reset() {
    setStep(1);
    setHeaders([]);
    setRawRows([]);
    setMapping([]);
    setMapped([]);
    setSummary(null);
  }

  async function onFile(file: File | undefined) {
    if (!file) return;
    const parsed = await parseWorkbook(file);
    const guessed = guessMapping(parsed.headers);
    setHeaders(parsed.headers);
    setRawRows(parsed.rows);
    setMapping(guessed);
    setStep(2);
  }

  function runMap() {
    const rows = mapRows(rawRows, mapping, accounts, kitchens);
    setMapped(rows);
    setStep(3);
  }

  function setDecision(rowNumber: number, decision: ImportDecision) {
    setMapped((rows) => rows.map((r) => (r.rowNumber === rowNumber ? { ...r, decision } : r)));
  }

  function commit() {
    const result = commitImport(mapped, accounts, kitchens);
    replaceAccounts(result.next);
    setSummary(result.summary);
    toast.success(
      `Imported ${result.summary.created} new, ${result.summary.updated} updated, ${result.summary.skipped} skipped.`,
    );
  }

  return (
    <Dialog
      open={importOpen}
      onOpenChange={(v) => {
        setImportOpen(v);
        if (!v) reset();
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload Excel</DialogTitle>
          <DialogDescription>
            Detect headers, map columns, review conflicts, then commit. Existing sites are never
            overwritten without an explicit Update.
          </DialogDescription>
        </DialogHeader>
        <div className="atlas-scroll max-h-[min(70dvh,640px)] overflow-y-auto px-5 py-4">
          {step === 1 ? (
            <label className="flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground hover:bg-muted/40">
              <input
                type="file"
                accept=".xlsx,.xls,.csv"
                className="sr-only"
                onChange={(e) => void onFile(e.target.files?.[0])}
              />
              Drop an Excel or CSV file, or click to browse
            </label>
          ) : null}

          {step === 2 ? (
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                {rawRows.length} rows detected. Map each spreadsheet column to a Siteline field.
              </p>
              <div className="overflow-auto rounded-md bg-muted/40">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs text-muted-foreground">
                      <th className="px-3 py-2">Excel column</th>
                      <th className="px-3 py-2">Siteline field</th>
                    </tr>
                  </thead>
                  <tbody>
                    {headers.map((h) => {
                      const current = mapping.find((m) => m.source === h)?.field ?? "";
                      return (
                        <tr key={h} className="border-t">
                          <td className="px-3 py-2">{h}</td>
                          <td className="px-3 py-2">
                            <NativeSelect
                              value={current}
                              onChange={(e) =>
                                setMapping((prev) =>
                                  prev.map((m) =>
                                    m.source === h
                                      ? {
                                          ...m,
                                          field: e.target.value as ColumnMapping["field"],
                                        }
                                      : m,
                                  ),
                                )
                              }
                            >
                              <option value="">Ignore</option>
                              {IMPORTABLE_FIELDS.map((f) => (
                                <option key={f.field} value={f.field}>
                                  {f.label}
                                </option>
                              ))}
                            </NativeSelect>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}

          {step === 3 && !summary ? (
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Review each row. Matches on client + site + city are flagged as duplicates.
              </p>
              <div className="overflow-auto rounded-md bg-muted/40">
                <table className="w-full min-w-[640px] text-xs">
                  <thead>
                    <tr className="text-left text-muted-foreground">
                      <th className="px-2 py-2">Row</th>
                      <th className="px-2 py-2">Client</th>
                      <th className="px-2 py-2">Site</th>
                      <th className="px-2 py-2">Notes</th>
                      <th className="px-2 py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mapped.map((r) => (
                      <tr key={r.rowNumber} className="border-t">
                        <td className="px-2 py-2 tabular">{r.rowNumber}</td>
                        <td className="px-2 py-2">{r.data.clientName}</td>
                        <td className="px-2 py-2">{r.data.siteName}</td>
                        <td className="px-2 py-2 text-muted-foreground">
                          {[...r.errors, ...r.warnings].join(" · ") || "Ready"}
                        </td>
                        <td className="px-2 py-2">
                          {r.errors.length ? (
                            <span className="text-destructive">Blocked</span>
                          ) : (
                            <NativeSelect
                              className="h-8"
                              value={r.decision}
                              onChange={(e) =>
                                setDecision(r.rowNumber, e.target.value as ImportDecision)
                              }
                            >
                              {r.matchId ? <option value="update">Update</option> : null}
                              <option value="skip">Skip</option>
                              <option value="create">Create new</option>
                            </NativeSelect>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}

          {summary ? (
            <div className="grid gap-3 sm:grid-cols-4">
              <Stat label="New" value={summary.created} />
              <Stat label="Updated" value={summary.updated} />
              <Stat label="Skipped" value={summary.skipped} />
              <Stat label="Errors" value={summary.errors} />
            </div>
          ) : null}
        </div>
        <div className="flex justify-end gap-2 border-t px-5 py-3">
          {step === 2 ? (
            <Button onClick={runMap}>Review rows</Button>
          ) : step === 3 && !summary ? (
            <Button onClick={commit}>Commit import</Button>
          ) : summary ? (
            <Button
              onClick={() => {
                setImportOpen(false);
                reset();
              }}
            >
              Done
            </Button>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-md bg-muted/50 p-3">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-serif text-2xl tabular">{value}</p>
    </div>
  );
}

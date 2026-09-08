import { useEffect, useMemo, useState } from "react";
import { AccountForm } from "./account-form";
import { AccountProfile } from "./account-profile";
import { AccountTable } from "./account-table";
import { ExcelImport } from "./excel-import";
import { FilterPanel, StatusLegend } from "./filter-panel";
import { InsightsPanel } from "./insights-panel";
import { KpiBar } from "./kpi-bar";
import { MapPane } from "./map-pane";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NativeSelect } from "@/components/ui/native-select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { downloadBlob, exportWorkbook } from "@/lib/excel";
import { applyFilters, computeInsights, computeKpis } from "@/lib/insights";
import { useDashboard } from "@/lib/store";
import type { GroupByField } from "@/lib/types";
import {
  Download,
  Filter,
  Map as MapIcon,
  MoreHorizontal,
  Plus,
  Search,
  Table2,
  Upload,
} from "lucide-react";
import { Toaster } from "sonner";

export function AppShell() {
  useEffect(() => {
    void useDashboard.persist.rehydrate();
  }, []);

  return (
    <>
      <Dashboard />
      <Toaster position="bottom-right" richColors={false} />
    </>
  );
}

function Dashboard() {
  const accounts = useDashboard((s) => s.accounts);
  const kitchens = useDashboard((s) => s.kitchens);
  const filters = useDashboard((s) => s.filters);
  const search = useDashboard((s) => s.search);
  const setSearch = useDashboard((s) => s.setSearch);
  const view = useDashboard((s) => s.view);
  const setView = useDashboard((s) => s.setView);
  const filtersOpen = useDashboard((s) => s.filtersOpen);
  const setFiltersOpen = useDashboard((s) => s.setFiltersOpen);
  const setFormMode = useDashboard((s) => s.setFormMode);
  const setImportOpen = useDashboard((s) => s.setImportOpen);
  const toggleStatus = useDashboard((s) => s.toggleStatus);
  const setFilters = useDashboard((s) => s.setFilters);
  const groupBy = useDashboard((s) => s.groupBy);
  const setGroupBy = useDashboard((s) => s.setGroupBy);
  const resetSample = useDashboard((s) => s.resetSample);
  const profileOpen = useDashboard((s) => s.profileOpen);
  const [mobileFilters, setMobileFilters] = useState(false);

  const rows = useMemo(
    () => applyFilters(accounts, filters, search),
    [accounts, filters, search],
  );
  const kpis = useMemo(() => computeKpis(rows), [rows]);
  const insights = useMemo(() => computeInsights(rows), [rows]);

  function focusIds(ids: string[]) {
    const subset = accounts.filter((a) => ids.includes(a.id));
    const statuses = Array.from(new Set(subset.map((a) => a.status)));
    setFilters({ statuses });
    setSearch("");
  }

  return (
    <div className="flex h-dvh flex-col bg-background text-foreground">
      <header className="flex shrink-0 flex-wrap items-center gap-2 border-b px-3 py-2.5 md:px-5">
        <div className="mr-2">
          <p className="font-serif text-xl leading-none tracking-tight">Siteline</p>
          <p className="mt-0.5 hidden text-xs text-muted-foreground sm:block">
            Pipeline account intelligence
          </p>
        </div>
        <div className="relative min-w-0 flex-1 md:max-w-sm">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search client, site, city, owner…"
            className="pl-9"
          />
        </div>
        <div className="flex items-center rounded-full bg-muted p-1">
          <button
            type="button"
            onClick={() => setView("table")}
            className="inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-sm"
            style={
              view === "table"
                ? { background: "var(--color-card)", boxShadow: "var(--shadow-border)" }
                : undefined
            }
          >
            <Table2 className="size-3.5" />
            Table
          </button>
          <button
            type="button"
            onClick={() => setView("map")}
            className="inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-sm"
            style={
              view === "map"
                ? { background: "var(--color-card)", boxShadow: "var(--shadow-border)" }
                : undefined
            }
          >
            <MapIcon className="size-3.5" />
            Map
          </button>
        </div>
        <Button className="hidden sm:inline-flex" onClick={() => setFormMode("create")}>
          <Plus className="size-4" />
          Add account
        </Button>
        <Button variant="outline" className="hidden sm:inline-flex" onClick={() => setImportOpen(true)}>
          <Upload className="size-4" />
          Upload
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileFilters(true)}
          aria-label="Filters"
        >
          <Filter className="size-4" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="More">
              <MoreHorizontal className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setFormMode("create")}>Add account</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setImportOpen(true)}>Upload Excel</DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => downloadBlob(exportWorkbook(rows, kitchens), "siteline-pipeline.xlsx")}
            >
              <Download className="size-4" />
              Export filtered
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setFiltersOpen(!filtersOpen)}>
              {filtersOpen ? "Hide filters" : "Show filters"}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={resetSample}>Reset sample data</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      <div className="shrink-0 space-y-3 px-3 py-3 md:px-5">
        <KpiBar kpis={kpis} />
        <StatusLegend selected={filters.statuses} onToggle={toggleStatus} />
        <InsightsPanel insights={insights} onFocus={focusIds} />
      </div>

      <div className="flex min-h-0 flex-1 gap-3 px-3 pb-3 md:px-5">
        {filtersOpen ? (
          <aside className="hidden w-64 shrink-0 lg:block">
            <div className="h-full rounded-lg bg-card p-3 shadow-[var(--shadow-border)]">
              <FilterPanel all={accounts} />
            </div>
          </aside>
        ) : null}

        <main className="relative min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm text-muted-foreground">
              <span className="tabular font-medium text-foreground">{rows.length}</span> of{" "}
              {accounts.length} sites
            </p>
            {view === "table" ? (
              <label className="flex items-center gap-2 text-xs text-muted-foreground">
                Group by
                <NativeSelect
                  className="h-8 w-40"
                  value={groupBy}
                  onChange={(e) => setGroupBy(e.target.value as GroupByField)}
                >
                  <option value="">None</option>
                  <option value="status">Status</option>
                  <option value="city">City</option>
                  <option value="state">State</option>
                  <option value="owner">Owner</option>
                  <option value="industry">Industry</option>
                  <option value="businessType">Business type</option>
                  <option value="pipelineFy">Pipeline FY</option>
                  <option value="kitchenId">Central kitchen</option>
                </NativeSelect>
              </label>
            ) : (
              <p className="text-xs text-muted-foreground">
                Click a marker for the full profile. Toggle CPU links to test operational reach.
              </p>
            )}
          </div>
          <div className="h-[calc(100%-2.25rem)] min-h-[420px] overflow-hidden">
            {view === "table" ? <AccountTable rows={rows} /> : <MapPane rows={rows} />}
          </div>
          {profileOpen ? <AccountProfile /> : null}
        </main>
      </div>

      {mobileFilters ? (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-foreground/40"
            aria-label="Close filters"
            onClick={() => setMobileFilters(false)}
          />
          <div className="absolute inset-y-0 left-0 w-[min(100%,20rem)] bg-card p-4 shadow-[var(--shadow-border)]">
            <FilterPanel all={accounts} />
          </div>
        </div>
      ) : null}

      <AccountForm />
      <ExcelImport />
    </div>
  );
}

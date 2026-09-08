import { create } from "zustand";
import { persist } from "zustand/middleware";
import type {
  AccountRecord,
  CentralKitchen,
  Filters,
  GroupByField,
  ViewMode,
} from "./types";
import { EMPTY_FILTERS } from "./types";
import { SAMPLE_ACCOUNTS, KITCHENS, buildSampleAccounts } from "./sample-data";
import { applyKitchen } from "./geo";
import { uid } from "./utils";

interface DashboardState {
  accounts: AccountRecord[];
  kitchens: CentralKitchen[];
  filters: Filters;
  search: string;
  view: ViewMode;
  selectedId: string | null;
  hoveredId: string | null;
  profileOpen: boolean;
  formMode: "closed" | "create" | "edit";
  importOpen: boolean;
  filtersOpen: boolean;
  insightsOpen: boolean;
  nearestId: string | null;
  nearestRadius: number;
  showCpuLinks: boolean;
  groupBy: GroupByField;
  setView: (view: ViewMode) => void;
  setSearch: (search: string) => void;
  setFilters: (patch: Partial<Filters>) => void;
  resetFilters: () => void;
  toggleStatus: (id: Filters["statuses"][number]) => void;
  setSelected: (id: string | null, openProfile?: boolean) => void;
  setHovered: (id: string | null) => void;
  setFormMode: (mode: DashboardState["formMode"]) => void;
  setImportOpen: (open: boolean) => void;
  setFiltersOpen: (open: boolean) => void;
  setInsightsOpen: (open: boolean) => void;
  setNearest: (id: string | null, radius?: number) => void;
  setNearestRadius: (radius: number) => void;
  setShowCpuLinks: (show: boolean) => void;
  setGroupBy: (g: GroupByField) => void;
  upsertAccount: (record: AccountRecord) => void;
  deleteAccount: (id: string) => void;
  replaceAccounts: (accounts: AccountRecord[]) => void;
  resetSample: () => void;
}

export const useDashboard = create<DashboardState>()(
  persist(
    (set, get) => ({
      accounts: SAMPLE_ACCOUNTS,
      kitchens: KITCHENS,
      filters: EMPTY_FILTERS,
      search: "",
      view: "table",
      selectedId: null,
      hoveredId: null,
      profileOpen: false,
      formMode: "closed",
      importOpen: false,
      filtersOpen: true,
      insightsOpen: false,
      nearestId: null,
      nearestRadius: 10,
      showCpuLinks: false,
      groupBy: "",
      setView: (view) => set({ view }),
      setSearch: (search) => set({ search }),
      setFilters: (patch) => set({ filters: { ...get().filters, ...patch } }),
      resetFilters: () => set({ filters: EMPTY_FILTERS, search: "" }),
      toggleStatus: (id) => {
        const cur = get().filters.statuses;
        const next = cur.includes(id) ? cur.filter((s) => s !== id) : [...cur, id];
        set({ filters: { ...get().filters, statuses: next } });
      },
      setSelected: (id, openProfile = false) =>
        set({
          selectedId: id,
          profileOpen: openProfile && !!id,
        }),
      setHovered: (id) => set({ hoveredId: id }),
      setFormMode: (formMode) => set({ formMode }),
      setImportOpen: (importOpen) => set({ importOpen }),
      setFiltersOpen: (filtersOpen) => set({ filtersOpen }),
      setInsightsOpen: (insightsOpen) => set({ insightsOpen }),
      setNearest: (id, radius) =>
        set({
          nearestId: id,
          nearestRadius: radius ?? get().nearestRadius,
          view: id ? "map" : get().view,
          selectedId: id ?? get().selectedId,
        }),
      setNearestRadius: (nearestRadius) => set({ nearestRadius }),
      setShowCpuLinks: (showCpuLinks) => set({ showCpuLinks }),
      setGroupBy: (groupBy) => set({ groupBy }),
      upsertAccount: (record) => {
        const kitchens = get().kitchens;
        const next = applyKitchen(
          { ...record, updatedAt: new Date().toISOString() },
          kitchens,
        );
        const accounts = get().accounts;
        const idx = accounts.findIndex((a) => a.id === next.id);
        if (idx >= 0) {
          const copy = accounts.slice();
          copy[idx] = next;
          set({ accounts: copy, formMode: "closed" });
        } else {
          set({
            accounts: [
              {
                ...next,
                id: next.id || uid("sit"),
                createdAt: next.createdAt || new Date().toISOString(),
              },
              ...accounts,
            ],
            formMode: "closed",
          });
        }
      },
      deleteAccount: (id) =>
        set({
          accounts: get().accounts.filter((a) => a.id !== id),
          selectedId: get().selectedId === id ? null : get().selectedId,
          profileOpen: get().selectedId === id ? false : get().profileOpen,
        }),
      replaceAccounts: (accounts) => set({ accounts }),
      resetSample: () =>
        set({
          accounts: buildSampleAccounts(KITCHENS),
          kitchens: KITCHENS,
          filters: EMPTY_FILTERS,
          search: "",
          selectedId: null,
          profileOpen: false,
          nearestId: null,
        }),
    }),
    {
      name: "siteline-pipeline-v1",
      skipHydration: true,
      partialize: (s) => ({
        accounts: s.accounts,
        kitchens: s.kitchens,
      }),
    },
  ),
);

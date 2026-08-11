import { useQuasar } from "quasar";

export function useMobile() {
  const $q = useQuasar();
  const isMobile = $q.screen.lt.sm;
  return { isMobile };
}
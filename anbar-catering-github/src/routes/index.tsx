import { createFileRoute } from "@tanstack/react-router";
import { WarehouseApp } from "@/components/catering/warehouse-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <WarehouseApp />;
}

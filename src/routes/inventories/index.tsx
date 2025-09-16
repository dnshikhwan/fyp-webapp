import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/inventories/")({
    component: Inventories,
});

function Inventories() {
    return <div>Hello "/inventories/"!</div>;
}

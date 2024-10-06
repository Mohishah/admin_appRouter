import Loading from "@/components/Loading";
import Table from "@/components/orders/Table";
import { Suspense } from "react";

export default function OrdersPage({ searchParams }) {
    const params = new URLSearchParams(searchParams);

    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 className="fw-bold">سفارشات</h4>
            </div>

            <Suspense key={params.toString()} fallback={<Loading />}>
                <Table params={params.toString()} />
            </Suspense>
        </>
    )
}
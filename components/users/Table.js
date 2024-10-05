import { getFetch } from "@/utils/fetch"
import Link from "next/link";
import Paginate from "../Paginate";

export default async function Table({params}) {
    const data = await getFetch(`/users?${params}`);

    return (
        <>
            <div className="table-responsive">
                <table className="table align-middle">
                    <thead>
                        <tr>
                            <th>نام</th>
                            <th>ایمیل</th>
                            <th>شماره تلفن</th>
                            <th>تاریخ عضویت</th>
                            <th>عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.cellphone}</td>
                                <td>{user.created_at}</td>
                                <td>
                                    <div className="d-flex">
                                        <Link href="#" className="btn btn-sm btn-outline-dark me-2"> نمایش </Link>
                                        <Link href="#" className="btn btn-sm btn-dark"> ویرایش </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Paginate links={data.meta.links} />
        </>
    )
}
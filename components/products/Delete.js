"use client"

import SubmitButton from "../SubmitButton";
import { useFormState } from 'react-dom';

export default function DeleteProduct({ id }) {
    const [state, formAction] = useFormState(DeleteProduct, {});

    return (
        <form action={formAction}>
            <input type="hidden" name="id" value={id} />
            <SubmitButton title="حذف" style="btn btn-dark mt-3" />
        </form>
    )
}
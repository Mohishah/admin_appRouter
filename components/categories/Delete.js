"use client"

import { deleteCategory } from "@/actions/categories";
import SubmitButton from "../SubmitButton";
import { useFormState } from 'react-dom';

export default function DeleteCategory({ id }) {
    const [state, formAction] = useFormState(deleteCategory, {});

    return (
        <form action={formAction}>
            <input type="hidden" name="id" value={id} />
            <SubmitButton title="حذف" style="btn btn-dark mt-3" />
        </form>
    )
}
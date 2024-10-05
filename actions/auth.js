"use server";

async function login(state, formData) {
    const email = formData.get('email');
    const password = formData.get('password');

    if (email === '' || password === '') {
        return {
            status: "error",
            message: "ایمیل و رمز عبور الزامی است"
        }
    }
}

export { login }
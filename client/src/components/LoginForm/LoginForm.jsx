
const LoginForm = (formData, setFormData) => {
    // Estado para almacenar los datos del formulario

    // Manejadores de cambios en el formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    // Manejador de envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario enviados:', formData);
        // Resetear formulario y estado de modificación
        setFormData({ name: '', email: '', password: '' });
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-1 w-40'>
            <div >
                <label>Username:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    required='true'
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    required='true'
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Send</button>
        </form>
    );
};

export default LoginForm;

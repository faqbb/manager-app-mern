import { createLog } from "../../tools/logManager";

const RegisterForm = ({ formData, setFormData }) => {

    // Manejadores de cambios en el formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };


    const sendToDB = async () => {
        try {
            const response = await fetch('/users/addUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                const data = await response.json();
                createLog('User created')
                console.log(data)
            } else {
                console.log('Error :(')
            }
        } catch (error) {
            console.log(error)
        }
    }


    // Manejador de envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        sendToDB()
        console.log('Datos del formulario enviados:', formData);
        // Resetear formulario y estado de modificación
        setFormData({ username: '', email: '', mobile: '', password: '' });
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-1 w-40'>
            <div >
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.name}
                    required='true'
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    required='true'                                  
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Mobile:</label>
                <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
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

export default RegisterForm;

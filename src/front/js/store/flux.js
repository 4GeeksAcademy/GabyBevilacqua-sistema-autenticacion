const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			registerUser: [],
			authToken: null, // Añadir token de autenticación
			user: null // Añadir informacion del usuario


		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

				// Acción para registrar un usuario
			registerUser: async (formData) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/register", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(formData)
					});

					if (!response.ok) {
						const errorData = await response.json();
						throw new Error(errorData.message); // Lanza el mensaje del backend
					}

					const data = await response.json();
					return true; // Registro exitoso
				} catch (error) {
					console.error("Error al registrar el usuario:", error.message);
					throw error; // Lanza el error al componente
				}
			},

			//accion para taer todos los usuarios

			getAllUsers: async () => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/users", {
						method: "GET",
						headers: {
							"Content-Type": "application/json"
						}
					});

					if (response.ok) {
						const data = await response.json();
						setStore({ registerUser: data });

						console.log("Datos de usuarios cargados exitosamente:", data);
						return data;
					} else {
						console.error("Error al cargar los datos de usuarios");
						return null;
					}
				} catch (error) {
					console.error("Error al cargar los datos de usuarios:", error);
					return null;
				}
			},

			// Acción para obtener los datos de un usuario por ID

			getUserById: async (userId) => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}api/user/${userId}`, {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							//		"Authorization": `Bearer ${store.authToken}` // Incluir el token
						}
					});

					if (response.ok) {
						const data = await response.json();
						setStore({ user: data });
						console.log("Datos del usuario cargados exitosamente:", data);
						return data;
					} else {
						console.error("Error al cargar los datos del usuario");
						return null;
					}
				} catch (error) {
					console.error("Error al cargar los datos del usuario:", error);
					return null;
				}
			},

			// Acción para actualizar los datos de un usuario

			updateUser: async (userId, formData) => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}api/user/${userId}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(formData)
					});

					if (!response.ok) {
						const errorData = await response.json();
						throw new Error(errorData.message); // Lanza el mensaje de error
					}

					const data = await response.json();
					console.log("Usuario actualizado exitosamente:", data);
					return true; // Retorna éxito
				} catch (error) {
					console.error("Error al actualizar el usuario:", error.message);
					throw error; // Lanza el error al componente
				}
			},

			// Acción para eliminar un usuario por ID
			deleteUser: async (userId) => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}api/user/${userId}`, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						}
					});

					if (response.ok) {
						console.log("Usuario eliminado exitosamente");
						return true;
					} else {
						console.error("Error al eliminar el usuario");
						return false;
					}
				} catch (error) {
					console.error("Error al eliminar el usuario:", error);
					return false;
				}
			},

			logout : () => {
				setStore({ authToken: null, user: null });

			},

			loginUser: async (email, password) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/login", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({ email, password })
					});

					if (response.ok) {
						const data = await response.json();
						setStore({ authToken: data.access_token, user: data.user });
						localStorage.setItem("authToken", data.access_token); // Guarda el token en el almacenamiento local
						localStorage.setItem("user", JSON.stringify(data.user)); // Guarda los datos del usuario
						console.log("Login successful!", data);
						return true; // Indica éxito en el inicio de sesión 
					} else {
						console.log("Login failed!");
						return false; // Indica fracaso en el inicio de sesión 
					}
				} catch (error) {
					console.error("Error logging in", error);
					return false;
				}
			},
				// llama la informacion de nuevo si se refresca la pagina
			getData : () =>{
				const data = localStorage.getItem("authToken") || null;
				const user = JSON.parse(localStorage.getItem("user")) || null;
				setStore({ authToken: data, user : user});

			}

		}
	};
};

export default getState;

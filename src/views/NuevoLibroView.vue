<script>
    import {ref} from 'vue';
    import axios from 'axios';
    export default {

        setup() {
            const nuevoLibro = ref({
                titulo: "",
                autor: "",
                ISBN: "",
                genero: "",
                disponibilidad: ""
            });
            const CrearLibro = async () =>{
                try{
                    const response = await axios.post(`http://localhost:3000/libros`, nuevoLibro.value)

                    setTimeout(()=>{
                        alert("Libro creado con éxito");
                    }, 500
                    );

                    //Limpiando formulario
                    nuevoLibro.value.titulo = "";
                    nuevoLibro.value.autor = "";
                    nuevoLibro.value.ISBN = "";
                    nuevoLibro.value.genero = "";
                    nuevoLibro.value.disponibilidad = "";
                    console.log("Libro creado correctamente:", response.data);
                }
                catch(error){
                    console.log("Error al crear el libro", error);
                }
            }
            return {
                nuevoLibro,
                CrearLibro
            }
        }
    };
</script>

<template>
    <main>
        <form @submit.prevent="CrearLibro()">
            <div>
                <div>
                    <label for="titulo">Título</label>
                    <input name="titulo" v-model="nuevoLibro.titulo" type="text" required placeholder="Título">
                </div>
                <div>
                    <label for="autor">Autor</label>
                    <input name="autor" v-model="nuevoLibro.autor" type="text" placeholder="Autor">
                </div>
                <div>
                    <label for="ISBN">ISBN</label>
                    <input name="ISBN" v-model="nuevoLibro.ISBN" type="text" placeholder="ISBN">
                </div>

                <div>
                    <label for="genero">Género</label>
                    <input name="genero" v-model="nuevoLibro.genero" type="text" placeholder="Género">
                </div>
                <div>
                    <label for="disponibilidad">Disponibilidad</label>
                    <input name="disponibilidad" v-model="nuevoLibro.disponibilidad" type="text" placeholder="Disponibilidad">
                </div>
            </div>
            <button class="btn enviar" type="submit">Crear nuevo Libro</button>
        </form>
    </main>
</template>


<style scoped>
    form{           
        width: 80%;                                                                     
        margin: 10px auto;
        padding: 20px;
        border: solid 1px #000;
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
    }
    label{
        font-weight: bold;
        margin-bottom: 5px;
        display: block;
        font-size: 1rem;
    }
    input{
        width: 100%;
        padding: 5px;
        border: 1px solid #100;
        margin-bottom: 10px;
        font-family: Playfair Display;
        font-size: 1rem;
    }
    input:hover{

    }
    .btn{
        display: flex;
        justify-content: space-between;
        padding: 10px 15px;
        text-decoration: none;
        font-family: "Playfair Display";
        color: #000;
        font-size: 1rem;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        margin: 5px;
    }
    .enviar{
        background-color: green;
        color: #fff;    
    }
    .enviar:hover{
          background-color: rgba(34, 202, 79, 0.688);
    }

</style>
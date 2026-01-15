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

                    setTimerout(()=>{
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
            <button type="submit">Crear nuevo Libro</button>
        </form>
    </main>
</template>


<style scoped>


</style>
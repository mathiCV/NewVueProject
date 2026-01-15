<script>
    import axios from "axios";
    import { onMounted, ref } from "vue";
    import { useRouter, useRoute } from "vue-router";
    export default{
        setup(){
            const router =useRouter();

            const editarLibro = ref({
                titulo: "",
                autor: "",
                ISBN: "",
                genero: "",
                disponibilidad: ""
            });
            const cargarLibro = async () =>{
                const libroId = useRoute().params.id;
                try{
                    const response = await axios.get (`http://localhost:3000/libros/${libroId}`)
                    editarLibro.value = response.data;
                    console.log("Libro cargado para edición:", editarLibro.value);
                }
                catch(error){
                    console.log("Error al cargar el libro", error);
                }
            };

            const actualizarLibro = async () =>{
                try{
                    const response = await axios.put(`http://localhost:3000/libros/${editarLibro.value.id}`, editarLibro.value)

                    setTimeout(()=>{
                        alert("Libro editado con éxito");
                    }, 500
                    );
                    console.log("Libro editado correctamente:", response.data);
                    router.push("/");
                }
                catch(error){
                    console.log("Error al editar el Libro", error);
                }
            }
            onMounted(()=>{
                cargarLibro();
            });
            return{
                editarLibro,
                actualizarLibro,
                cargarLibro
            }
        }
    };
</script>

<template>
    <main>
            <main>
        <form @submit.prevent="actualizarLibro()">
            <div>
                <div>
                    <label for="titulo">Título</label>
                    <input name="titulo" v-model="editarLibro.titulo" type="text" required placeholder="Título">
                </div>
                <div>
                    <label for="autor">Autor</label>
                    <input name="autor" v-model="editarLibro.autor" type="text" placeholder="Autor">
                </div>
                <div>
                    <label for="ISBN">ISBN</label>
                    <input name="ISBN" v-model="editarLibro.ISBN" type="text" placeholder="ISBN">
                </div>

                <div>
                    <label for="genero">Género</label>
                    <input name="genero" v-model="editarLibro.genero" type="text" placeholder="Género">
                </div>
                <div>
                    <label for="disponibilidad">Disponibilidad</label>
                    <input name="disponibilidad" v-model="editarLibro.disponibilidad" type="text" placeholder="Disponibilidad">
                </div>
            </div>
            <button type="submit">Editar Libro</button>
        </form>
    </main>
    </main>
</template>


<style scoped>
    
</style>
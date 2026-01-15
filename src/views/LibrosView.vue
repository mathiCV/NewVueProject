<script>
    import axios from 'axios';
    import { ref, onMounted} from 'vue';

    export default {

        setup() {

            const libros = ref([]);

            const listarLibros = async () =>{
                try{
                    const response = await axios.get('http://localhost:3000/libros');
                    libros.value = response.data;
                    console.log("Libros leídos desde el endpoint:", libros.value);
                }
                catch(error){
                    console.log("Error al leer los libros desde el endpoint", error);
                }
            }
            const eliminarLibros = async (id, titulo) =>{
                const confirmDelete = window.confirm(`¿Estás seguro de eliminar el libro: ${titulo}?`);
                if (confirmDelete){
                    try{
                        await axios.delete(`http://localhost:3000/libros/${id}`);
                        console.log(`Libro con id ${id} eliminado correctamente.`);
                        listarLibros();
                    }
                    catch(error){
                        console.log("Error al eliminar el libro", error);
                    }
                }
            }
            onMounted(() => {
                listarLibros();
            });
            return{
                libros,
                eliminarLibros
            };
        }        
    };
</script>

<template>
    <main>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Titulo</th>
                    <th>ISBN</th>
                    <th>Género</th>
                    <th>Disponibilidad</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for = "libro in libros" :key="libro.id">
                    <td class="alinear">{{ libro.id }}</td>
                    <td>{{ libro.titulo }}</td>
                    <td>{{ libro.ISBN }}</td>
                    <td class="alinear">{{ libro.genero }}</td>         
                    <td>{{ libro.disponibilidad }}</td>
                    <div class="botones">
                        <button class="btn eliminar" @click="eliminarLibros(libro.id, libro.titulo)">Eliminar</button>
                        <RouterLink class="btn editar" :to="`/editarLibro/${libro.id}`">Editar</RouterLink>
                    </div>
                </tr>
            </tbody>
        </table>
    </main>
</template>
    

<style scoped>
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 10px auto;
        box-shadow:  0 0 20px rgba(0, 0, 0, 0.2);
    }
    th, td{
        border: 1px solid #000;
    }
    th{
        background-color: #e2e2e2;
    }
    .alinear{
        text-align: center;
    }
    .botones{
        display: flex;
        justify-content: space-around;
        border: solid 1.5px #000;
        border-collapse: collapse;
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
    .eliminar{
        background-color: #ff4d4d;
        color: #fff;    
    }
    .eliminar:hover{
          background-color: rgb(207, 17, 17);
    }
    .editar{
        background-color: orange;
        color: #fff                     
    }

</style>
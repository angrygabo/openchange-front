import { createSlice } from "@reduxjs/toolkit";

export const origenSlice = createSlice ({
    name: 'unValor',
    initialState: {
        miNombre: 'Gabriel',
        signo: 'Acuario',
        bibliotecas: [
            {
                nombre:'react',
                comienzo: '2013'
            },
            {
                nombre:'angular',
                comienzo: '2010'
            }
        ]
    },
    reducers: {
        guardarNombre: (state, action) => {
            state.miNombre = action.payload;
        },
        modificarUnValor: (state, action) => {
            const {indice, nuevoNombre, nuevoComienzo} = action.payload;
            state.bibliotecas[indice].nombre = nuevoNombre;
            state.bibliotecas[indice].comienzo = nuevoComienzo;
        }
    }
})

export const otroSlice = createSlice ({
    name: 'otroValor',
    initialState: {
        miEdad: '39'
    },
    reducers: {
        guardarEdad: (state, action) => {
            state.miEdad = action.payload;
        }
    }
})

export const trabajadoresSlice = createSlice ({
    name: 'misTrabajadores',
    initialState: {
        trabajadores: []
    },
    reducers: {
        guardarTrabajador: (state, action) => {
            state.trabajadores=[...state.trabajadores, action.payload]
        },
        modificarStatus: (state, action) => {
            const {indice, nuevoStatus} = action.payload;
            state.trabajadores[indice].estado = nuevoStatus;
        }
    }
})

export const departamentosSlice = createSlice ({
    name: 'misDepartamentos',
    initialState: {
        statusRequest: ["Abierto","Procesando","Disputa","Finalizado"]
    },
    reducers: {

    }
})


// Async action to send data to an external API
export const enviarDatosAlAPI = (indice, nuevoStatus) => async (dispatch, getState) => {
    // Assuming you have an API endpoint to send the data
    const apiEndpoint = 'https://example.com/api/updateStatus';

    try {
        // Get the updated state
        const state = getState();
        const updatedTrabajador = state.trabajadores.trabajadores[indice];

        // Create the payload to send to the API
        const payload = {
            indice,
            nuevoStatus,
            updatedTrabajador,
        };

        // Make the API call
        const response = await axios.post(apiEndpoint, payload);

        // Dispatch the action to modify the status in the Redux state
        dispatch(modificarStatus({ indice, nuevoStatus }));
        
        // You can handle the API response here if needed
        console.log(response.data);
    } catch (error) {
        // Handle error if the API call fails
        console.error('Error sending data to the API:', error);
    }
};



export const  {guardarNombre} = origenSlice.actions;
export const  {modificarUnValor} = origenSlice.actions;
export const  {guardarEdad} = otroSlice.actions;

export const  {guardarTrabajador} = trabajadoresSlice.actions;
export const  {guardarDepartamento} = departamentosSlice.actions;

export const  {modificarStatus} = trabajadoresSlice.actions;
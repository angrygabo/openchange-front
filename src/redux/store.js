import { configureStore } from "@reduxjs/toolkit";
import { origenSlice, otroSlice, trabajadoresSlice, departamentosSlice } from "./slices";

export default configureStore ({
    reducer: {
        unValor: origenSlice.reducer,
        otroValor: otroSlice.reducer,
        misTrabajadores: trabajadoresSlice.reducer,
        misDepartamentos: departamentosSlice.reducer,
    }
})
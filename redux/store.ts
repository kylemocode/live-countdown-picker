import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // the convention is to name this photos rather than photosStore but photosStore is clearer to me.
    // photosStore: photosSliceReducer,

    // anyOtherStore: anyOtherSlice,
// middleware: ['array of middlewares'],
  // devTools: process.env.NODE_ENV !== "development" ? false : true,
  },
});

export default store;

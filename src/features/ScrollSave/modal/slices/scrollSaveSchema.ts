import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ScrollSaveSchema } from '../types/scrollSaveSchema';

const initialState: ScrollSaveSchema = {
    scroll: {},
};

export const scrollSaveSlice = createSlice({
    name: 'scrollSave',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{path:string, position:number}>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: scrollActions } = scrollSaveSlice;
export const { reducer: scrollReducer } = scrollSaveSlice;

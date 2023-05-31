import { createSelector } from '@reduxjs/toolkit';

export const selectContentData = (state) => state.content.datas;
export const selectContentLoading = (state) => state.content.isLoading;
export const selectContentError = (state) => state.content.error;

export const selectFiltersRegion = (state) => state.filters.region;
export const selectFiltersSearch = (state) => state.filters.search;

export const contentSelector = createSelector(
    selectContentData,
    selectFiltersRegion,
    selectFiltersSearch,
    (datas, region, search) => {
        // return datas.filter((data) => {
        //     if (region === 'All') {
        //         return search.length ? data.name.common.toLowerCase().includes(search.toLowerCase()) : data;
        //     }
        //     return (
        //         data.region === region &&
        //         (search.length ? data.name.common.toLowerCase().includes(search.toLowerCase()) : data)
        //     );
        // });
        if (region === 'All') {
            return datas.filter((data) => {
                return search.length ? data.name.common.toLowerCase().includes(search.toLowerCase()) : data;
            });
        } else {
            return datas.filter((data) => {
                return (
                    data.region === region &&
                    (search.length ? data.name.common.toLowerCase().includes(search.toLowerCase()) : data)
                );
            });
        }
    },
);

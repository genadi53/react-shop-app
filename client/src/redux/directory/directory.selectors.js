import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectsDirectorySection = createSelector(
    [selectDirectory],
    directory => directory.sections
);


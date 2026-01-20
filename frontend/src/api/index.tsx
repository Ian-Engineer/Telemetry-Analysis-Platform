import files from "./endpoints/files";
import general from "./endpoints/general";

const api = {
    ...general,
    files
};

export default api;

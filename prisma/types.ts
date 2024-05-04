type Annee = {
    id: string;
    annee: string;
    specialites: Specialite[];
};

// Specialite model
type Specialite = {
    id: string;
    nom: string;
    anneeId: string;
    annee: Annee;
    sections: Section[];
};

// Section model
type Section = {
    id: string;
    nom: string;
    specialite: Specialite;
    specialiteId: string;
    annee: string;
    groupes: Groupe[];
    modules: Module[];
    capacite?: number;
};

// Groupe model
type Groupe = {
    id: string;
    nom: string;
    section: Section;
    sectionId: string;
};

// Module model
type Module = {
    id: string;
    nom_module: string;
    nb_cours?: number;
    td: boolean;
    tp: boolean;
    section: Section;
    sectionId: string;
};

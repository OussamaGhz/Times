type ScheduleEntry = {
  day: string;
  group: string | null;
  moduleName: string;
  room: string;
  session_type: string;
  slot: number;
  teacher: string;
  time: string;
};

type Section_respose = {
  name: string;
  schedule: ScheduleEntry[];
};

type Specialite = {
  name: string;
  sections: Section_respose[];
};

type Data = {
  specialite: Specialite[];
  year: number;
};

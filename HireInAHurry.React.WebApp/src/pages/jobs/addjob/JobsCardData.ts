export interface IJobsCardData {
  vendorName: string;
  clientName: string;
  activeJobsCount: number;
  totalAssociateCandidatesCount: number;
  activePercentageClient: number;
  activePercentageRecruiter: number;
}

const JobsCardData: IJobsCardData[] = [
  {
    vendorName: "Augmento",
    clientName: "Honeywell",
    activeJobsCount: 10,
    totalAssociateCandidatesCount: 40,
    activePercentageClient: 25,
    activePercentageRecruiter: 25,
  },
  {
    vendorName: "Augmento",
    clientName: "Cyncly",
    activeJobsCount: 8,
    totalAssociateCandidatesCount: 40,
    activePercentageClient: 0,
    activePercentageRecruiter: 75,
  },
  {
    vendorName: "Augmento",
    clientName: "TCS",
    activeJobsCount: 78,
    totalAssociateCandidatesCount: 40,
    activePercentageClient: 0,
    activePercentageRecruiter: 75,
  },
  {
    vendorName: "Augmento",
    clientName: "Microsoft",
    activeJobsCount: 67,
    totalAssociateCandidatesCount: 40,
    activePercentageClient: 0,
    activePercentageRecruiter: 75,
  },
  {
    vendorName: "Augmento",
    clientName: "Google",
    activeJobsCount: 10,
    totalAssociateCandidatesCount: 40,
    activePercentageClient: 25,
    activePercentageRecruiter: 50,
  },
  {
    vendorName: "Augmento",
    clientName: "Google",
    activeJobsCount: 10,
    totalAssociateCandidatesCount: 40,
    activePercentageClient: 25,
    activePercentageRecruiter: 50,
  },
  {
    vendorName: "Augmento",
    clientName: "Wipro",
    activeJobsCount: 10,
    totalAssociateCandidatesCount: 40,
    activePercentageClient: 25,
    activePercentageRecruiter: 50,
  },
  {
    vendorName: "Augmento",
    clientName: "Infosys",
    activeJobsCount: 10,
    totalAssociateCandidatesCount: 40,
    activePercentageClient: 75,
    activePercentageRecruiter: 0,
  },
];

export default JobsCardData;

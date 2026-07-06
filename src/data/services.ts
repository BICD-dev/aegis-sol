import { Wrench, ShieldCheck, Workflow } from 'lucide-react';
import type { Service } from '../types/service';

export const services: Service[] = [
  {
    id: 'well-engineering',
    icon: Wrench,
    title: 'Well Engineering & Intervention',
    description:
      'Production optimization, slickline operations, and integrated wellbore solutions engineered for maximum recovery with minimal downtime.',
  },
  {
    id: 'asset-integrity',
    icon: ShieldCheck,
    title: 'Asset Integrity Management',
    description:
      'Non-Destructive Testing (NDT), corrosion control, and structural fitness-for-service assessments across the full asset lifecycle.',
  },
  {
    id: 'epc-pipeline',
    icon: Workflow,
    title: 'EPC Pipeline Services',
    description:
      'Minor modifications, pipeline repairs, procurement management, and facility maintenance delivered to EPC-grade standards.',
  },
];
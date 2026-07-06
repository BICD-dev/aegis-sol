import {
  Wrench,
  ShieldCheck,
  Truck,
  Users,
  HardHat,
} from 'lucide-react';
import type { Service } from '../types/service';

export const services: Service[] = [
  {
    id: 'well-services',
    icon: Wrench,
    title: 'Well Services & Workover',
    description:
      'Intervention, completion support, and workover supervision delivered by certified field personnel to minimize downtime while maintaining strict safety standards.',
  },
  {
    id: 'pipeline-integrity',
    icon: ShieldCheck,
    title: 'Pipeline Integrity & Maintenance',
    description:
      'Inspection, corrosion monitoring, and repair programmes that keep pipeline infrastructure compliant with industry and regulatory standards.',
  },
  {
    id: 'hse-consulting',
    icon: HardHat,
    title: 'HSE & Risk Consulting',
    description:
      'Site risk assessments, permit-to-work systems, and tailored HSE training designed to improve operational safety and regulatory compliance.',
  },
  {
    id: 'equipment-rental',
    icon: Truck,
    title: 'Equipment Rental & Logistics',
    description:
      'Reliable equipment rental and logistics support for personnel and materials across onshore and swamp locations.',
  },
  {
    id: 'technical-staffing',
    icon: Users,
    title: 'Manpower & Technical Staffing',
    description:
      'Provision of vetted, certified technical personnel for short-term call-outs and long-term project deployments.',
  },
];
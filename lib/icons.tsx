'use client'
import {
  GraduationCap, Building2, Users, Package, TrendingUp,
  MessageCircle, Hospital, Globe, Zap, Cloud, DollarSign, Bot,
} from 'lucide-react'

export const SERVICE_ICONS: Record<string, any> = {
  'school-erp': GraduationCap,
  'college-erp': Building2,
  'hrms': Users,
  'inventory': Package,
  'sales-erp': TrendingUp,
  'whatsapp-automation': MessageCircle,
  'hospital-opd': Hospital,
  'website-development': Globe,
  'digital-transformation': Zap,
  'custom-cloud-erp': Cloud,
  'payg-erp': DollarSign,
  'ai-automation': Bot,
}

export function IconTile({ icon: Icon, color }: { icon: any; color: string }) {
  return (
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
      style={{ background: `${color}12`, border: `1px solid ${color}20` }}
    >
      <Icon size={18} style={{ color }} />
    </div>
  )
}

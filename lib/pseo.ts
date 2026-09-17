export type PseoService = Readonly<{
  kind: 'service';
  slug: string;
  name: string;
  title: string;
  description: string;
  intent: string;
  buyer: string;
  context: string;
  workflow: readonly string[];
  deliverables: readonly string[];
  evidence: readonly string[];
  readiness: string;
  agencySlug: string;
  agencyName: string;
  agencyThaiName: string;
  agencyStatus: 'incubating' | 'target' | 'locked';
  agencyStage: string;
}>;

export const pseoService: PseoService = {
  "kind": "service",
  "slug": "critical-systems-assurance-map",
  "name": "Critical-systems assurance map (future)",
  "title": "Critical-Systems Assurance Map สำหรับงานกลาโหมและอวกาศ",
  "description": "วาง assurance, security และ authorization boundary ภายใต้ข้อกำหนดที่อนุญาต",
  "intent": "ต้องการจัดโครงสร้าง assurance และ security boundary ของระบบสำคัญก่อนเริ่มงานที่ต้อง authorization",
  "buyer": "Sovereign buyer, critical-system operator และ aerospace venture",
  "context": "เป็น future capability สำหรับ assurance map ยังไม่มีงานจัดหาอาวุธ ภารกิจลับ หรือการเข้าถึงระบบโดยไม่มี authorization",
  "workflow": [
    "ยืนยัน mission/system scope และ authorization",
    "ทำ assurance claim, dependency และ evidence map",
    "กำหนด security, export และ supplier boundary",
    "ส่ง review pack ให้ critical-system owner และ authorized partner"
  ],
  "deliverables": [
    "system/mission boundary",
    "assurance และ evidence register",
    "security/export/authorization question map",
    "authorized handoff plan"
  ],
  "evidence": [
    "ไม่อ้าง clearance, defense contract, mission outcome หรือ compliance approval",
    "ไม่รับข้อมูลลับหรือ technical detail ที่มีข้อจำกัดการส่งออกผ่าน public site",
    "งานจริงต้องอยู่ภายใต้ authorization และผู้เชี่ยวชาญเฉพาะทาง"
  ],
  "readiness": "ต้องมี critical-systems lead, authorization/security reviewer, data/export boundary และ partner approval ก่อนเปิด inquiry",
  "agencySlug": "defense-aerospace",
  "agencyName": "Defense & Aerospace",
  "agencyThaiName": "กลาโหมและอวกาศ",
  "agencyStatus": "locked",
  "agencyStage": "P3"
};

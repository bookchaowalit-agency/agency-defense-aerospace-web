// Public site navigation only: the organization hub, agency portfolio, privacy, public status, and contact.
export const hubHref = 'https://bookchaowalit.com';
export const contactHref = 'mailto:bookchaowalit.work@gmail.com';
export const portfolioHref = 'https://agency.bookchaowalit.com/agencies';

export default function SiteLinks() {
  return (
    <nav className="site-links" aria-label="ลิงก์เว็บไซต์">
      <a href={hubHref}>หน้าแรก</a>
      <a href={portfolioHref}>ดูทั้ง 14 กลุ่มงาน</a>
      <a href="https://bookchaowalit.com/privacy"><span lang="en">Privacy</span></a>
      <a href="https://monitor.bookchaowalit.com/"><span lang="en">Status</span></a>
      <a href={contactHref}><span lang="en">Contact</span></a>
    </nav>
  );
}

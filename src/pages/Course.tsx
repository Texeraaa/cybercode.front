import { AppSidebar } from '@/components/AppSidebar';
import { Sidebar, SidebarHeader, SidebarProvider } from '@/components/ui/sidebar';
import { Helmet } from 'react-helmet-async';

export default function Course() {
  return (
    <SidebarProvider>
      <Helmet title="Curso" />
    </SidebarProvider>
  );
}

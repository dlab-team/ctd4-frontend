import React from 'react';
import { HomeIcon, UserIcon, ClipboardIcon, BriefcaseIcon, AcademicCapIcon, DocumentDuplicateIcon  } from '@heroicons/react/outline';

export const SidebarData = [

  {
    title: 'Mi Perfil',
    path: '/perfil',
    icon: <HomeIcon />, 
    cName: 'nav-text'
  },
 

  {
    title: 'Mis Datos Personales',
    path: '/datospersonales',
    icon: <ClipboardIcon />,
    cName: 'nav-text'
  },
 
  {
    title: 'Mi Perfil Educacional',
    path: '/perfileducacional',
    icon: <AcademicCapIcon />,  
    cName: 'nav-text'
  }, 
  
  {
    title: 'Mi Perfil Laboral',
    path: '/perfilLaboral',
    icon: <BriefcaseIcon />, 
    cName: 'nav-text'
  },

  {
    title: 'Mi Experiencia',
    path: '/experiencia',
    icon: <DocumentDuplicateIcon />, 
    cName: 'nav-text'
  },
  
  {
    title: 'Acerca de mi',
    path: '/acercade',
    icon: <UserIcon />,
    cName: 'nav-text'
  },

];

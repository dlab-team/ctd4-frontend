import React from 'react';
import {
  HomeIcon,
  UserIcon,
  ClipboardIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/outline';

export const SidebarData = [
  {
    title: 'Inicio',
    path: '/perfil',
    icon: <HomeIcon />,
    cName: 'nav-text',
  },
  {
    title: 'Perfil',
    path: '/datospersonales',
    icon: <ClipboardIcon />,
    cName: 'nav-text',
  },

  {
    title: 'Test técnicos',
    path: '/test',
    icon: <AcademicCapIcon />,
    cName: 'nav-text',
  },
];

import { React } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

export const SidebarData = [
  {
    title: '收藏',
    path: '/collect',
    icons: <FaIcons.FaBookmark />,
    cName: 'nav-text',
  },
  {
    title: '通知',
    path: '/notify',
    icons: <FaIcons.FaBell />,
    cName: 'nav-text',
  },
  {
    title: '我的文章',
    path: '/draft',
    icons: <FaIcons.FaFile />,
    cName: 'nav-text',
  },
  {
    title: '設定',
    path: '/setting',
    icons: <AiIcons.AiTwotoneSetting />,
    cName: 'nav-text',
  },
]

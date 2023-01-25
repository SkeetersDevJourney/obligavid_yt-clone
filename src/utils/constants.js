import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'

import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import ChildCareIcon from '@mui/icons-material/ChildCare';

import SettingsIcon from '@mui/icons-material/Settings';
import SosIcon from '@mui/icons-material/Sos';
import FeedbackIcon from '@mui/icons-material/Feedback';

export const categories = [
  { name: 'New', icon: <HomeIcon />, },
  { name: 'Coding', icon: <CodeIcon />, },
  { name: 'ReactJS', icon: <CodeIcon />, },
  { name: 'NextJS', icon: <CodeIcon />, },
  { name: 'Music', icon: <MusicNoteIcon /> },
  { name: 'Education', icon: <SchoolIcon />, },
  { name: 'Podcast', icon: <GraphicEqIcon />, },
  { name: 'Movie', icon: <OndemandVideoIcon />, },
  { name: 'Gaming', icon: <SportsEsportsIcon />, },
  { name: 'Live', icon: <LiveTvIcon />, },
  { name: 'Sport', icon: <FitnessCenterIcon />, },
  { name: 'Fashion', icon: <CheckroomIcon />, },
  { name: 'Beauty', icon: <FaceRetouchingNaturalIcon />, },
  { name: 'Comedy', icon: <TheaterComedyIcon />, },
  { name: 'Gym', icon: <FitnessCenterIcon />, },
  { name: 'Crypto', icon: <DeveloperModeIcon />, },
];


export const sidebarBtnsPrimary = [
  { name: 'Home', icon: <HomeIcon />, },
  { name: 'Minis', icon: <CloseFullscreenIcon />, },
  { name: 'Subbers', icon: <SubscriptionsIcon />, }
]

export const sidebarBtnsSecondary = [
  { name: 'Library', icon: <VideoLibraryIcon />, },
  { name: 'History', icon: <HistoryIcon />, },
  { name: 'Watch Later', icon: <BrowseGalleryIcon />, },
  { name: 'Liked Videos', icon: <ThumbUpIcon />, },
]

export const sidebarBtnsMore = [
  { name: 'ObligaVids Premium', icon: <WorkspacePremiumIcon />, },
  { name: 'ObligaTunes', icon: <MusicVideoIcon />, },
  { name: 'ObligaTV', icon: <OndemandVideoIcon />, },
  { name: 'ObligaKids', icon: <ChildCareIcon />, },
]

export const sidebarBtnsInfo = [
  { name: 'Settings', icon: <SettingsIcon />, },
  { name: 'Help', icon: <SosIcon />, },
  { name: 'Send Feedback', icon: <FeedbackIcon />, },
]
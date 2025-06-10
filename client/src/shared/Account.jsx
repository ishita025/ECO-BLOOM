import * as React from 'react'
import {
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  IconButton,
  Tooltip,
  Typography,
  Modal,
  Button,
} from '@mui/material'
import Logout from '@mui/icons-material/Logout'
import { useSelector } from 'react-redux'

const maleAvatar = 'https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png'
const femaleAvatar = 'data:image/png;base64,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'

export default function AccountMenu({ handeLogOut }) {
  const { user } = useSelector(state => state.auth)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const [profileModalOpen, setProfileModalOpen] = React.useState(false)

  const handleClick = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)
  const openProfileModal = () => {
    setProfileModalOpen(true)
    handleClose()
  }
  const closeProfileModal = () => setProfileModalOpen(false)

  const getAvatarUrl = () => {
    if (user?.avatarUrl) return user.avatarUrl
    if (user?.gender?.toLowerCase() === 'female') return femaleAvatar
    return maleAvatar
  }

  return (
    <>
      {/* Avatar Button */}
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar
              src={getAvatarUrl()}
              sx={{ width: 32, height: 32 }}
            >
              {user?.name?.[0] || 'U'}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={openProfileModal}>
          <ListItemIcon>
            <Avatar src={getAvatarUrl()} sx={{ width: 28, height: 28 }} />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem onClick={handeLogOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

      {/* Profile Modal */}
      <Modal open={profileModalOpen} onClose={closeProfileModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 380,
            maxWidth: '90vw',
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: 3,
            p: 4,
            textAlign: 'center',
            outline: 'none',
          }}
        >
          <Avatar
            src={getAvatarUrl()}
            sx={{ width: 90, height: 90, mx: 'auto', mb: 2 }}
          />
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {user?.name || 'Unknown User'}
          </Typography>

          <Box sx={{ mt: 2, textAlign: 'left' }}>
            {user?.email && (
              <Typography variant="body2" color="text.secondary" mb={1}>
                📧 <strong>Email:</strong> {user.email}
              </Typography>
            )}
            {user?.phone && (
              <Typography variant="body2" color="text.secondary" mb={1}>
                📞 <strong>Phone:</strong> {user.phone}
              </Typography>
            )}
            {user?.gender && (
              <Typography variant="body2" color="text.secondary" mb={1}>
                ⚧ <strong>Gender:</strong> {user.gender}
              </Typography>
            )}
            {user?.address && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  🏡 Address
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.address.street}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.address.city}, {user.address.country} - {user.address.zip}
                </Typography>
              </Box>
            )}
          </Box>

          <Button
            variant="contained"
            onClick={closeProfileModal}
            sx={{ mt: 4, borderRadius: 2 }}
            fullWidth
          >
            Close
          </Button>
        </Box>
      </Modal>
    </>
  )
}

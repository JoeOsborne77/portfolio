import React from 'react'
import {SlSocialLinkedin} from 'react-icons/sl'
import {SiCodewars} from 'react-icons/si'
import {IoLogoInstagram} from 'react-icons/io'
import {SiMedium} from 'react-icons/si'
import {SiCodecademy} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/joe-osborne-998813116/" target_blank><SlSocialLinkedin/></a>
      <a href="https://github.com/JoeOsborne77/" target_blank><BsGithub/></a>
      <a href="https://medium.com/@joeosborne77" target_blank><SiMedium/></a>
      <a href="https://www.codecademy.com/profiles/joeOsborne4015426741" target_blank><SiCodecademy/></a>
      <a href="https://www.codewars.com/users/Tardigrade77" target_blank><SiCodewars/></a>
      <a href="https://www.instagram.com/joeosborne77/" target_blank><IoLogoInstagram/></a>

    </div>
  )
}

export default HeaderSocials
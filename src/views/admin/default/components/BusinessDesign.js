import React from 'react';
import { useColorModeValue } from '@chakra-ui/react';

const BusinessDesign = () => {
  // Dynamic styles using useColorModeValue
  const styles = {
    card: {
      backgroundColor: useColorModeValue('white', '#1b2559'),
      borderRadius: '10px',
      color: useColorModeValue('secondaryGray.900', 'white'),
      width: '250px',
      padding: '20px',
      boxShadow: useColorModeValue('0 4px 8px rgba(0, 0, 0, 0.1)', '0 4px 8px rgba(0, 0, 0, 0.2)'),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '50vh',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
    },
    icon: {
      width: '24px',
      height: '24px',
      marginRight: '10px',
      borderRadius: '50%',
    },
    title: {
      fontSize: '1em',
      fontWeight: 'bold',
    },
    subTitle: {
      fontSize: '0.9em',
      color: useColorModeValue('gray.600', '#cccccc'),
    },
    description: {
      fontSize: '1.1em',
      margin: '10px 0',
    },
    infoContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '10px 0',
    },
    infoItem: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '0.9em',
      color: useColorModeValue('gray.600', '#cccccc'),
    },
    infoIcon: {
      marginRight: '5px',
      borderRadius: '50%',
      height: '20px',
    },
    avatarsContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    avatar: {
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      marginRight: '-10px',
      border: useColorModeValue('2px solid white', '2px solid #2C2F48'),
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#7B61FF',
      borderRadius: '20px',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <img
          style={styles.icon}
          src="https://tse4.mm.bing.net/th?id=OIP.NyQa4qaoJa_WriDPCqAMuAHaGK&pid=Api&P=0&h=180" // Replace with the actual icon URL
          alt="Business Design"
        />
        <div>
          <div style={styles.title}>Business Design</div>
          <div style={styles.subTitle}>New lesson is available</div>
        </div>
      </div>
      <div style={styles.description}>
        What do you need to know to create better products?
      </div>
      <div style={styles.infoContainer}>
        <div style={styles.infoItem}>
          <img
            style={styles.infoIcon}
            src="https://cdn-icons-png.flaticon.com/256/6862/6862349.png"
            alt="Time"
          />
          85 mins
        </div>
        <div style={styles.infoItem}>
          <img
            style={styles.infoIcon}
            src="https://cdn.iconscout.com/icon/free/png-256/free-play-video-3561479-2985467.png?f=webp&w=256" 
            alt="Format"
          />
          Video format
        </div>
      </div>
      <div style={styles.avatarsContainer}>
        <img
          style={styles.avatar}
          src="https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg" 
          alt="User 1"
        />
        <img
          style={styles.avatar}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NThQQ3QZ2fqde8ww_c0EbKAAF_Pflfjf2cmp_bi4DrrgB2yQOtWMZlXz8IoXlDJHDUI&usqp=CAU" 
          alt="User 2"
        />
        <img
          style={styles.avatar}
          src="https://media.licdn.com/dms/image/D4D08AQE0CXu4hnoe7g/croft-frontend-shrinkToFit1024/0/1646754728586?e=2147483647&v=beta&t=ADkOVwOwmP-4rCH4y0g2_OBFlsszl01TpQPhCgt5SSc"
          alt="User 3"
        />
        <img
          style={styles.avatar}
          src="https://sb.kaleidousercontent.com/67418/1920x1282/7978bca0ba/christina-wocintechchat-com-50tkcap8m3a-unsplash.jpg" 
          alt="User 4"
        />
        <div style={{ marginLeft: '10px' }}>18+</div>
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.button}>Get Started</button>
      </div>
    </div>
  );
}

export default BusinessDesign;

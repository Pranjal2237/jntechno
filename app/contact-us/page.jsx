import Banner from '@/components/banner'
import { contact } from '@/constant'
import { contactBanner } from '@/public'
import styles from './styles.module.css'

const page = () => {
  return (
    <div>
      <Banner heading='Contact Us' height='560px' image={contactBanner} />
        <div className='wrapper page-heading'>
          <p>
            Contact Us
          </p>
        </div>
        <div className='wrapper'>
            <h1 className={styles.contactLocations}>Global Locations</h1>
            <div >
                {
                  contact.map(({country,locations})=>(
                    <div style={{marginBlock:'2rem'}}>
                      <h2 style={{fontWeight:"600"}}>{country}</h2>
                      <div className={styles.contactContainer}>
                        {
                          locations.map(({area,company,location:{primary,secondary},phone,email})=>(
                            <div className={styles.contactBox}>
                              <h1>{area}</h1>
                              <h2>{company}</h2>
                              <p>{primary}</p>
                              <p>{secondary}</p>
                              <p>Tel: {phone}</p>
                              <p>Email: {email}</p>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  ))
                }
            </div>
        </div>
    </div>
  )
}

export default page

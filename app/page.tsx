import { fetchFirebaseData } from '@/lib/firebaseUtils';
//import BillardForm from '@/components/BillardReservieren'
import Öffnungszeiten from '@/components/Öffnungszeiten'
import Aktivitäten from '@/components/Aktivitäten'
//import Kontakt from '@/components/Kontakt'
import Anfahrt from '@/components/Anfahrt'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'

export default async function Home() {
  const firebaseData = await fetchFirebaseData(); 

  if (!firebaseData) {
    return <div>Error loading data. Please try again later.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 overflow-hidden">
      <div>
        <Header />
        <main className='bg-gray-100'>
          <Hero whatsapp={firebaseData.whatsapp} news={firebaseData.news} />
          <Aktivitäten aktivitäten={firebaseData.aktivitäten} />
          <Öffnungszeiten öffnungszeiten={firebaseData.öffnungszeiten} />
          <Anfahrt />
          
          {/* <BillardForm /> */}
          <Kontakt />
          
        </main>
        <Footer />
      </div>
    </div>
  )
}

import Link from 'next/link'
import { useTranslation } from '../i18n'
import { Footer } from './components/Footer'
import styles from './../page.module.css'

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng)
  return (
    <>
      <div className='page-base'>
        <h1>{t('title')}</h1>
        <Link href={`/${lng}/second-page`}>
          {t('to-second-page')}
        </Link>
        <br />
        <Link href={`/${lng}/client-page`}>
          {t('to-client-page')}
        </Link>
        <div className={styles.moduleArea}>
          {t('module-css')}
        </div>
      </div>
      <Footer lng={lng} />
    </>
  )
}
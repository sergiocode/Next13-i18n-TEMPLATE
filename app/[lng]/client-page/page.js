'use client'

import Link from 'next/link'
import { useTranslation } from '../../i18n/client'
import { Footer } from '../components/Footer/client'
import { useState } from 'react'
import styles from './../../page.module.css'

export default function Page({ params: { lng } }) {
  const { t } = useTranslation(lng, 'client-page')
  const [counter, setCounter] = useState(0)
  return (
    <>
      <div className='page-base'>
        <h1>{t('title')}</h1>
        <p>{t('counter', { count: counter })}</p>

        <div>
          <button onClick={() => setCounter(Math.max(0, counter - 1))} className='main-button'>-</button>
          <button onClick={() => setCounter(Math.min(10, counter + 1))} className='main-button'>+</button>
        </div>
        
        <Link href={`/${lng}`}>
          <button type="button" className='main-button'>
            {t('back-to-home')}
          </button>
        </Link>

        <div className={styles.moduleArea}>
          {t('module-css')}
        </div>
      </div>
      <Footer lng={lng} />
    </>
  )
}
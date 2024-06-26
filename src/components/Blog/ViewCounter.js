"use client"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'



const supabase = createClientComponentClient();


const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(0)

  useEffect(() => {
    const incrementView = async () => {

      try {
        let { error } = await supabase
          .rpc('increment', {
            slug_text: slug
          })
        if (error) {
          console.error("An error incrementing the views count : ", error)
        }

      } catch (error) {
        console.error("An error while incrementing the views count : ", error)
      }

    }

    if (!noCount) {
      incrementView()
    }
  }, [slug, noCount])

  useEffect(() => {
    const getViews = async () => {

      try {

        let { data, error } = await supabase
          .from('views')
          .select('count')
          .match({ slug: slug })
          .single()

        if (error) {
          console.error("An error incrementing the views count : ", error)
        }

        setViews(data ? data.count : 0)

      } catch (error) {
        console.error("An error while incrementing the views count : ", error)
      }

    }

      getViews()
  }, [slug])



  if (showCount) {
    return (
      <div>{views} views</div>
    )
  }

}

export default ViewCounter
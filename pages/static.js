import Image from 'next/image'

function GridItem({props}) {
  const {urls, alt_description, description} = props;
  return (
    <div className="border-2 p-4 relative">
      <Image src={urls.small} alt={alt_description} height={300} width={400} layout="responsive"/>

      <p className="mt-4">{description}</p>
    </div>
  )
}

export default function StaticPage({data}) {
  const {results} = data;
  return (
    <div className="mx-4">
      <h1 className="text-4xl text-center my-16">Static Site Generated.</h1>
      <p className="text-lg text-center mb-16 max-w-5xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet a metus fringilla rutrum. Fusce ac risus cursus, mollis odio nec, efficitur justo. In odio lacus, elementum vitae mi sodales, imperdiet ornare dui. Sed facilisis orci non mi malesuada, ornare commodo ex ullamcorper. Curabitur quis metus lobortis, accumsan purus sit amet, luctus ipsum. Quisque dictum nulla mauris, tempor sagittis nibh faucibus eu. Aliquam nunc justo, lacinia a leo accumsan, volutpat euismod nisl. Fusce erat sapien, dapibus eu nisi vitae, suscipit vehicula mauris.</p>

      <p className="text-lg text-center mb-16 max-w-5xl mx-auto">Morbi at quam quam. Aliquam vel elit at lacus feugiat tempor ut ac elit. Sed at fringilla massa. Nullam vel justo lectus. Nullam faucibus ultrices nisl, cursus interdum purus pellentesque ac. Praesent quis lacus quis mauris venenatis pellentesque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vitae lacus nec tortor hendrerit feugiat. Aenean odio neque, posuere vitae facilisis eu, commodo at purus. Morbi rhoncus lorem sed nibh aliquet, non commodo justo ornare. Aenean vitae mollis massa.</p>

      <div className="grid gap-4 grid-cols-3">
        {
          results.map((item) => <GridItem key={item.id} props={item} />)
        }
      </div>

      <footer className="p-5 border-t w-full text-center text-lg font-extralight mt-16">
        © Tom Sisman 2021
      </footer>
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`https://api.unsplash.com/search/photos?page=1&query=burgers&client_id=${process.env.UNSPLASHKEY}=1&per_page=9`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: { data }, // will be passed to the page component as props
  }
}
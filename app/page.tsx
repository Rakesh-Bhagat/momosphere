   import Image from "next/image"
   import Link from "next/link"
import { ArrowRight, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-amber-400"></div>
        <div className="absolute top-[500px] left-0 w-full h-[300px] bg-gradient-to-b from-amber-400 to-white"></div>
      </div>

      {/* Header/Navigation */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/momo-logo.png"
            alt="Momosphere Logo"
            width={120}
            height={10}
            className="mr-2 rounded-full bg-transparent mix-blend-mode: multiply"
          />
          <span className="font-bold text-xl -ml-8">MOMOSPHERE</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#" className="text-sm font-medium hover:text-amber-700">
            Home
          </Link>
          <Link href="#menu" className="text-sm font-medium hover:text-amber-700">
            Menu
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-amber-700">
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-amber-700">
            Contact
          </Link>
        </nav>
        <Button variant="outline" className="hidden md:flex">
          Order
        </Button>
        <Button variant="outline" size="icon" className="md:hidden">
          <span className="sr-only">Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Momos</h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">With spicy chutney</h2>
          <p className="text-gray-600 mb-6">
            Our signature momos are handcrafted with love, filled with the finest ingredients, and served with our
            secret spicy chutney.
          </p>
          <div className="flex items-center mb-6">
            <div className="flex items-center mr-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-amber-400"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-600">4.9 rating</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold">&#8377;199</span>
            <Button className="bg-black text-white hover:bg-gray-800">Add to Cart</Button>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Delicious Momos with Chutney"
            width={400}
            height={400}
            className="rounded-full mx-auto"
          />
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-amber-500"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <h3 className="font-semibold mb-2">Fresh Ingredients Daily</h3>
          <p className="text-sm text-gray-600">We use only the freshest ingredients sourced locally every day.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-amber-500"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <h3 className="font-semibold mb-2">Authentic Recipes</h3>
          <p className="text-sm text-gray-600">Traditional recipes passed down through generations.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-amber-500"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h3 className="font-semibold mb-2">Fast Delivery</h3>
          <p className="text-sm text-gray-600">Hot and fresh momos delivered to your doorstep in 30 minutes.</p>
        </div>
      </section>

      {/* About Us */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Family Momo Shop"
            width={400}
            height={400}
            className="rounded-full mx-auto"
          />
        </div>
        <div>
          <div className="flex items-center mb-4">
            <h2 className="text-xl font-medium mr-4">About us</h2>
            <ArrowRight className="h-5 w-5" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Family momo shop</h3>
          <p className="text-gray-600 mb-6">
            Momosphere was founded in 2010 by the Sherpa family, bringing authentic Himalayan flavors to your
            neighborhood. Our recipes have been passed down through generations, and we take pride in serving the most
            delicious momos in town.
          </p>
          <Button variant="outline" className="rounded-full">
            Learn more
          </Button>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Delivery</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md relative">
            <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Order</h3>
            <p className="text-sm text-gray-600">Place your order through our website or mobile app.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md relative">
            <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Payment</h3>
            <p className="text-sm text-gray-600">Secure payment options available for your convenience.</p>
          </div>
          <div className="bg-black text-white p-6 rounded-lg shadow-md relative">
            <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 hidden md:block text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Delivery</h3>
            <p className="text-sm">Our delivery partners will bring your momos hot and fresh to your doorstep.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Packaging</h3>
            <p className="text-sm text-gray-600">Eco-friendly packaging to keep your momos warm and delicious.</p>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">Menu</h2>
        <Tabs defaultValue="popular" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="veg">Veg</TabsTrigger>
            <TabsTrigger value="nonveg">Non-Veg</TabsTrigger>
            <TabsTrigger value="sides">Sides</TabsTrigger>
          </TabsList>
          <TabsContent value="popular" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Classic Chicken Momos", price: 99 },
              { name: "Veggie Delight Momos", price: 69 },
              { name: "Spicy Pork Momos", price: 89 },
              { name: "Cheese & Spinach Momos", price: 79 },
              { name: "Jhol Aloo Momos", price: 99 },
              { name: "Tandoori Momos", price: 199 },
              { name: "Paneer Momos", price: 159 },
              { name: "Chili Momos", price: 99 },
            ].map((item, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=200&width=300&text=Momo${index + 1}`}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-medium text-sm mb-1">{item.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">&#8377;{item.price}</span>
                    <Button variant="outline" size="sm">
                      Add to cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="veg" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Veg menu items would go here */}
            <div className="text-center py-8 col-span-full">
              <p className="text-gray-500">Select the "Popular" tab to see our menu items</p>
            </div>
          </TabsContent>
          <TabsContent value="nonveg" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Non-veg menu items would go here */}
            <div className="text-center py-8 col-span-full">
              <p className="text-gray-500">Sorry, We Don't serve non-veg items yet</p>
            </div>
          </TabsContent>
          <TabsContent value="sides" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sides menu items would go here */}
            <div className="text-center py-8 col-span-full">
              <p className="text-gray-500">Select the "Popular" tab to see our menu items</p>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Comments</h2>
          <div className="flex items-center">
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Customer"
                width={40}
                height={40}
                className="rounded-full mr-3"
              />
              <div>
                <h3 className="font-medium">Rahul</h3>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-amber-400"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              "The momos at Momosphere are absolutely delicious! The dough is perfectly thin, and the fillings are so
              flavorful. I especially love their spicy chutney. Will definitely be ordering again!"
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Customer"
                width={40}
                height={40}
                className="rounded-full mr-3"
              />
              <div>
                <h3 className="font-medium">Anushka</h3>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-amber-400"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              "I've tried momos from many places, but Momosphere is by far the best! Their tandoori momos are a
              game-changer. The delivery was quick, and the momos were still hot when they arrived. Highly recommend!"
            </p>
          </div>
        </div>
      </section>

      {/* Quote and Newsletter */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
        <div className="flex items-center">
          <div>
            <div className="text-4xl font-serif mb-6">"</div>
            <p className="text-gray-600 italic mb-6">
              Our family recipes have been perfected over generations, bringing you the authentic taste of Himalayan
              momos right to your doorstep.
            </p>
            <div className="flex items-center">
              <p className="font-medium mr-4">Hariom pandey</p>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2">
            <h3 className="font-bold mb-2">Order</h3>
            <p className="text-sm text-gray-600 mb-4">
              Ready to experience the best momos in town? Place your order now!
            </p>
            <Button className="bg-amber-400 hover:bg-amber-500 text-black">Order Now</Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Delicious Momos"
              width={200}
              height={200}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="container mx-auto px-4 py-16">
        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
          <Image
            src="/mapshot.png?height=400&width=1200&text=Map"
            alt="Location Map"
            width={1200}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 text-amber-500"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <Link href="https://maps.app.goo.gl/RKYJLH8cidSpadHz7?g_st=iw" className="text-sm font-medium">Find the Momo location</Link>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 bg-gray-800 text-white p-3 rounded-lg shadow-md">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span className="text-sm">Open: 10 AM - 10 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">Enter your name:</h2>
          <div className="mb-4">
            <input type="text" className="w-full p-3 border rounded-lg" placeholder="Your name" />
          </div>
          <h2 className="text-2xl font-bold mb-6">Your phone number:</h2>
          <div className="mb-4">
            <input type="tel" className="w-full p-3 border rounded-lg" placeholder="Your phone number" />
          </div>
          <h2 className="text-2xl font-bold mb-6">Enter message:</h2>
          <div className="mb-4">
            <textarea className="w-full p-3 border rounded-lg" rows={4} placeholder="Your message"></textarea>
          </div>
          <div className="flex justify-end">
            <Button className="bg-amber-400 hover:bg-amber-500 text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Send
            </Button>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6">Contacts</h2>
          <p className="text-amber-500 mb-2">Contact us in a convenient way:</p>
          <div className="mb-6">
            <h3 className="font-medium mb-2">Phone:</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
            <p className="text-gray-600">+1 (555) 987-6543</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Email:</h3>
            <p className="text-gray-600">info@momosphere.com</p>
          </div>
          <Button className="mt-8 bg-black text-white hover:bg-gray-800">Find us on map</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">About us</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-amber-500">
                    Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-amber-500">
                    Chefs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-amber-500">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-amber-500">
                    Delivery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-amber-500">
                    Catering
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-amber-500">
                    Bulk orders
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Schedule</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-600">Mon-Fri: 10 AM - 10 PM</li>
                <li className="text-gray-600">Sat-Sun: 11 AM - 11 PM</li>
                <li className="text-gray-600">Holidays: 12 PM - 9 PM</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-600 hover:text-amber-500">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-amber-500">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-amber-500">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-amber-500">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} Momosphere. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


import React from 'react'
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'

const AboutCard = () => {
  return (
    <section className="py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">About</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  The company was founded by a team of experienced traders and data scientists with a mission to
                  democratize advanced trading tools. Our cutting-edge algorithm combines machine learning with
                  traditional technical analysis to provide unparalleled market insights.
                </p>
                <Button variant="outline" className="gap-2">
                  Learn More <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-3xl" />
                <img
                  src="/placeholder.png?height=400&width=600"
                  alt="Team"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
  )
}

export default AboutCard
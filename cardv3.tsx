import React from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

const CardV3 = () => {
  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-background to-muted/50">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-16">Experience the Power</h2>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl blur-3xl"></div>
              <div className="relative bg-background p-8 rounded-3xl shadow-2xl overflow-hidden">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">Live Demo</h3>
                    <p className="text-muted-foreground mb-6">
                      Watch our AI-powered indicator in action. See how it analyzes market trends and provides
                      actionable insights in real-time.
                    </p>
                    <Button size="lg" className="gap-2">
                      Start Interactive Demo <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="w-full md:w-1/2 aspect-video bg-muted rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.png?height=300&width=400"
                      alt="Demo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default CardV3
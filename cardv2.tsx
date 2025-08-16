import React from 'react'

const CardV2 = () => {
  return (
    <section className="py-24 bg-muted/30 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>
          <div className="container relative">
            <h2 className="text-4xl font-bold text-center mb-16">Your Edge in Global Trading</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <div className="w-full md:w-1/2 space-y-8">
                {[
                  {
                    title: "Precision Trades",
                    description: "Execute trades with pinpoint accuracy, backed by our AI-driven analysis.",
                  },
                  {
                    title: "Time Efficiency",
                    description: "Save hours of analysis with our automated market insights.",
                  },
                  {
                    title: "Risk Mitigation",
                    description: "Stay protected with intelligent stop-loss and take-profit recommendations.",
                  },
                  {
                    title: "Global Opportunities",
                    description: "Uncover hidden gems in markets around the world, 24/7.",
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
              <div className="w-full md:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-3xl"></div>
                <div className="relative bg-background p-8 rounded-3xl shadow-2xl">
                  <h3 className="text-2xl font-bold mb-4">Real-Time Market Pulse</h3>
                  <div className="space-y-4">
                    {["EURUSD", "GBPJPY", "AUDUSD", "USDCAD"].map((pair) => (
                      <div key={pair} className="flex justify-between items-center">
                        <span className="font-semibold">{pair}</span>
                        <span className="text-accent">+0.05%</span>
                        <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${Math.random() * 100}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default CardV2
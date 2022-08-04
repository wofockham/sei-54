class DashboardController < ApplicationController
    def brother
        brother = %w[ Groucho Harpo Chico ].sample
        render :plain => brother
    end

    def time
        render :json => Time.now
    end

    def uptime
        render :plain => `uptime`
    end

    def info
        brother = %w[ Groucho Harpo Chico ].sample
        time = Time.now.to_s
        uptime = `uptime`

        render :json => {
            :brother => brother,
            :time => time,
            :uptime => uptime,
            :calls => rand(1..10),
            :floods => rand(50..10_000)
        }
    end
end

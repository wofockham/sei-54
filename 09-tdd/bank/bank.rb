class Bank
    attr_accessor :name, :accounts # getters + setters

    def initialize(n)
        @name = n
        @accounts = {}
    end

    def create_account(account_name, starting_deposit)
        @accounts[account_name] = starting_deposit
    end

    def deposit(account_name, amount)
        @accounts[account_name] += amount
    end
end

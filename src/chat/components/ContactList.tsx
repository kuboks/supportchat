import { NavLink, useParams } from 'react-router'

import { ScrollArea } from '@/components/ui/scroll-area'

import { useQuery } from '@tanstack/react-query'

import { getClients } from '@/fake/fake-data'

export const ContactList = () => {

  const { clientId } = useParams();

  // tanstack, ayuda con peticiones
  // isLoading para indicar que algo esta cargando
  const { data: clients, isLoading } = useQuery({
    queryKey: ['clients'],
    queryFn: () => getClients(),
    // staleTime refresca la data en este caso cada 5 min
    staleTime: 1000 * 60 * 5,
  });

  return (
    <ScrollArea className="h-[calc(100vh-120px)]">
      <div className="space-y-4 p-4">
        <div className="space-y-1">
          <h3 className="px-2 text-sm font-semibold">Contacts</h3>
          <div className="space-y-1">
            {isLoading && (
              <div className="flex items-center justify-center p-4 text-sm text-muted-foreground">
                <div className="animate-pulse">Loading contacts...</div>
              </div>
            )}
            {/* isActive para determinar que cliente esta seleccionado */}
            {
              clients?.map((client) => (
                <NavLink to={`/chat/${client.id}`}
                  key={client.id}
                  className={({ isActive }) =>
                    `w-full flex items-center mt-3 transition-all duration-300' ${isActive
                      ? 'bg-primary/10 text-primary font-medium rounded-md'
                      : 'hover:bg-muted/50 rounded-md'
                    }`
                  }>

                  <div
                    className={`h-6 w-6 rounded-full mr-2 flex-shrink-0 flex items-center justify-center text-xs ${
                      clientId === client.id
                        ? 'bg-blue-300 text-blue-600 font-medium'
                        : 'bg-gray-300'
                      }`
                    }
                  >
                    {client.name.charAt(0)}
                    {client.name.charAt(1)}
                  </div>
                  <span
                    className={`transition-all duration-300 ${
                      clientId === client.id
                        ? 'text-blue-600 font-medium'
                        : 'text-gray-600'
                      }`
                    }
                  >
                    {client.name}
                  </span>
                </NavLink>
              ))
            }
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}

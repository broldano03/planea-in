App -> AspectCmi (objectives, setObjectives, items, setItems)

    AspectCmi -> Okr (objectives, setObjectives, items, setItems, parentId)

        Okr -> {
            creamos el array "aspectsCmi" con 4 elementos
                Financiero, ClientesMercado, ProcesosInternos, Aprendizajes
                    atributos: id, cod, title, color, bgOkr
            Mapeamos aspectsCmi -> aspectCmi
                // Mostramos Objetivos en cada aspectCmi: 
                ShowSupItems (supItems, setSupItems, aspectCmi, items, setItems, parentId)
        }

            ShowSupItems -> {
                SupItems -> {
                    Mapeamos SupItems -> supItem
                        Cada supItem muestra los keyResults
                            ShowItems ->
                }
                AddIconSup
            }

